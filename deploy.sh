#!/bin/bash
# Deploy do site do Mateus Caniceiro — site ESTÁTICO (sem serviço Node desde 06/out/2026).
# Rodar como root a cópia INSTALADA:  /usr/local/sbin/deploy-mateuscaniceiro
# Esta cópia do repositório é só a versão revisável. Depois de revisar o diff:
#   install -o root -g root -m 755 /home/mateuscaniceiro/deploy.sh /usr/local/sbin/deploy-mateuscaniceiro
#
# O build (que executa código do app) roda como o usuário do app. O root só copia o out/ pronto para
# /var/www/mateuscaniceiro, que é o que o nginx serve — trocando a pasta inteira de uma vez, para
# nunca servir um site pela metade, e sem que o nginx dependa da pasta do projeto.
APP_DIR=/home/mateuscaniceiro APP_USER=mateuscan NODE_EXTRA=--max-old-space-size=2048
. /usr/local/lib/deploy-comum.sh
PUB=/var/www/mateuscaniceiro

posse node_modules .next out .npm next-env.d.ts tsconfig.tsbuildinfo package-lock.json
echo "==> Dependências"; comoapp npm install --no-audit --no-fund
echo "==> Build";        comoapp npm run build
[ -s out/index.html ] || { echo "==> ERRO: out/index.html não foi gerado — nada publicado"; exit 1; }

echo "==> Publicando em $PUB"
rm -rf "$PUB.novo" "$PUB.antigo"
cp -r out "$PUB.novo"
chown -R root:root "$PUB.novo"; chmod -R a+rX,go-w "$PUB.novo"
[ -d "$PUB" ] && mv "$PUB" "$PUB.antigo"
mv "$PUB.novo" "$PUB"
rm -rf "$PUB.antigo"

code=$(curl -s -o /dev/null -m 10 -w '%{http_code}' --resolve mateuscaniceiro.com.br:443:127.0.0.1 https://mateuscaniceiro.com.br/)
[ "$code" = 200 ] && echo "==> OK: mateuscaniceiro.com.br → HTTP 200" || { echo "==> ERRO: mateuscaniceiro.com.br → HTTP $code"; exit 1; }
