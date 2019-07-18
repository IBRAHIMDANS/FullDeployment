
#Install mysql
sudo apt install -y mysql-server
echo "\n \n Cleaning Up Database"
#Clean the server of default artifacts
mysql < ./databaseScripts/cleanSQL.sql
echo "\n \n Setting Up Live Schema"
#Create the schema meant for live application
mysql < ./databaseScripts/setUpSchema.sql
echo "\n \n Securing Accounts"
#Create password for root and user app
sh ./databaseScripts/secureSQL.sh
