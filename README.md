# dockerFileHelloNode
Arquivo Dockerfile para start de aplicação node expondo a porta 8000 do container com apenas um "Olá mundo node.js docker"

basta executar os comandos a seguir em seu terminal com docker:

docker build -t <nome_da_imagem>:latest .
docker run -it -p <porta_desejada_localhost>:8000 <nome_da_imagem>
com a aplicação rodando, vá para o navegador e abra o localhost na porta 8000. Caso queira trocar a porta 80 para outra porta do container basta alterar no comando EXPOSE do arquivo Dockerfile.
