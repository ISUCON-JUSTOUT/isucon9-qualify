#/bin/sh

echo | sudo tee /var/log/nginx/access.log
echo | sudo tee /var/log/mysql/mysql-slow.log

cd webapp/go
sudo make

cd -
sudo systemctl restart isucari.golang.service
sudo systemctl stop payment.service shipment.service

sleep 5
./bin/benchmarker -target-url http://127.0.0.1
