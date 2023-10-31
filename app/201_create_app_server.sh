
cd $(dirname $0);pwd

echo "docker image build"
docker image build --tag jinroappimg:1.0 .
docker images

echo "docker run"
docker run --name jinroappcont -p 8080:8080 -d jinroappimg:1.0
docker ps -a
