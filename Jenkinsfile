def gv

pipeline {
    agent any
    options {
        ansiColor('xterm')
    }
    stages{
        stage('Preparation'){
            steps {
                gv = load('jenkins\script.groovy')
            }
        }
        stage('SCM'){
            steps{
                script{
                    CheckoutSCM()
                }
            }
        }
        stage('Populate ENV'){
            steps{
                script{
                    PopulateEnv()
                }
            }
        }
        stage('Build'){
            steps{
                script{
                    BuildDepedency()
                }
            }
        }
        stage('Testing'){
            steps{
                script{
                    TestApplication()
                }
            }
        }
        stage('Stash Report'){
            steps{
                script{
                    StashReport()
                }
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