
cd $(dirname $0);pwd

echo "docker rm"
docker rm --force jinrodbcont
docker ps -a

echo "docker image rm"
docker rmi jinrodbimg:1.0
docker images
