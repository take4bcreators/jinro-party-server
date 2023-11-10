
cd $(dirname $0);pwd

echo "docker image build"
docker image build --tag jinrowebimg:1.0 .
docker images

echo "docker run"
docker run --name jinrowebcont -p 3000:3000 -d jinrowebimg:1.0
docker ps -a
