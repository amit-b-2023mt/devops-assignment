pipeline {
    agent any
    
    tools {nodejs "Node v18"}

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}