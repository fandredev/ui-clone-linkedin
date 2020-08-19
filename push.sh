#! /bin/bash

echo "Vamos começar a commitar em 2s: "
sleep 2s
echo "Ok, esses são os arquivos que você modificou no seu desenvolvimento :O "
git status
echo "Continuar com as alterações?"
read continue_
yes=yes

    if [ $continue_ = $yes ];
      then
    git add .
    echo "Essa é a lista de arquivos modificados: "
    sleep 2s
    git status
    read -p "Qual a descrição do seu commit? " desc
    git commit -am "$desc"
    git push
    echo "Commit realizado"
    
    else
      echo "Lembre-se de marcar 'yes' caso a mensagem para continuar apareça"
      git status
fi