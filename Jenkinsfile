pipeline {
    agent any

    tools {nodejs "Node v18"}

    stages {
        stage('Package Install') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}