pipeline {
    agent any
    options {
        ansiColor('xterm')
    }
    stages{
        stage('SCM'){
            steps{
                git branch: 'qa-dikabrenda', 
                credentialsId: '0105c6c0-ed90-4433-8ddd-3728c87f861d', 
                url: 'https://github.com/paquesid/paques-api-automation.git'
            }
        }
        stage('Populate ENV'){
            steps{
                bat "copy env\\env.sample .env"
            }
        }
        stage('Build'){
            steps{
                bat "npm install"
            }
        }
        stage('Testing'){
            steps{
                bat "npm run test:api"
            }
        }
        stage('Stash Report'){
            steps{
                echo "stash report"
            }
        }
    }

    post{
        always{
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'public', 
                reportFiles: 'index.html', 
                reportName: 'Paques-API-Automation', 
                reportTitles: ''
            ])
        }
    }
}