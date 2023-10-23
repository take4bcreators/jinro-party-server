
cd $(dirname $0);pwd

echo "docker image build"
docker image build --tag jinrodbimg:1.0 .
docker images

echo "docker run"
docker run --name jinrodbcont -p 5432:5432 -d jinrodbimg:1.0
docker ps -a
