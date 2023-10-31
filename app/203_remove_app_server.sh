
cd $(dirname $0);pwd

echo "docker rm"
docker rm --force jinroappcont
docker ps -a

echo "docker image rm"
docker rmi jinroappimg:1.0
docker images
