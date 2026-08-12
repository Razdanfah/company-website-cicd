pipeline {
    agent any

    stages {

        stage('checkout') {
            steps {
                deleteDir()

                sh '''
                    git clone https://github.com/Razdanfah/company-website-cicd.git
                '''
            }
        }

        stage('deploy') {
            steps {
                sh '''
                    rm -rf /var/www/html/*
                    cp -r company-website-cicd/* /var/www/html/
                '''
            }
        }
    }
}
