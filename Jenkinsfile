#! groovy

pipeline {
   agent any

   stages {
      stage('Build') {
         steps {
            git branch: 'main', credentialsId: '4a2fef02-85b8-4941-a5a8-43d35957b56d', url: 'https://github.com/sandeepmishramca/node-tutorials.git'
            echo 'Building stage'
         }
      }
      stage('Test') {
         steps {
            echo 'Testing stage'
         }
      }
      stage('Deploy') {
         steps {
            echo 'Deploy stage'
         }
      }
   }
