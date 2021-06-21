pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                echo 'Installing..'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm build'
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving..'
                archiveArtifacts artifacts: 'dist/', followSymlinks: false
            }
        }

        stage('Deploy') {
            /**
             * Deploy to Tencent COS
             * needed coscmd, before deploy remeber to install it on agent environment by `pip install coscmd`
             */
            environment {
                COS_SECRET_ID = credentials('r5-shop-cos-secret-id')
                COS_SECRET_KEY = credentials('r5-shop-cos-secret-key')
                COS_BUCKET = credentials('r5-shop-cos-bucket')
                COS_REGION = credentials('r5-shop-cos-region')
            }
            steps {
                echo 'Deploying....'
                sh 'coscmd config -a ${COS_SECRET_ID} -s ${COS_SECRET_KEY} -b ${COS_BUCKET} -r ${COS_REGION}'
                sh 'coscmd -d upload -rs --delete dist/ /'
            }
        }

        stage('Clean') {
            steps {
                sh 'rm ~/.cos.conf' //clean the cos config include secret app key
            }
        }
    }
}
