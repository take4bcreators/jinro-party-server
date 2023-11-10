
cd $(dirname $0);pwd

echo "docker rm"
docker rm --force jinrowebcont
docker ps -a

echo "docker image rm"
docker rmi jinrowebimg:1.0
docker images
