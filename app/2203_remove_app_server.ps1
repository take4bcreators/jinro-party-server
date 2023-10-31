

Write-Output "docker rm"
docker rm --force jinroappcont
docker ps -a

Write-Output "docker image rm"
docker rmi jinroappimg:1.0
docker images


