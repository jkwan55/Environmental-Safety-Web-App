# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Blow is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP: http://34.68.209.201:3000/
2. SSH username: 648admin
3. SSH password or key: Included in folder as file `648adminKey`
    <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used: IP: 127.0.0.1 PORT: 3306
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
5. Database username: csc648
6. Database password: sithlord
7. Database name (basically the name that contains all your tables): appDB
8. Instructions on how to use the above information.

To navigate to the site, type `http://34.68.209.201:3000/` in the address bar.

Assuming access to a Linux machine, to SSH into the server, from bash, type `ssh -i [PATH TO 648adminKey] 648admin@34.68.209.201`. This will log you onto the linux instance as the user `648admin`

Using MySQL workbench, please use the above provided information, including the SSH key, to establish a connection to the MySQL database on the server. This includes filling out the Database username, password, and IP with port. If the connection through the server URL `http://34.68.209.201:3000/` does not work, please try `http://34.68.209.201:22/`

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
