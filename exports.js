// Export all available scans

module.exports = {
    aws : {
        'acmValidation'                 : require(__dirname + '/plugins/aws/acm/acmValidation.js'),
        'asgMultiAz'                    : require(__dirname + '/plugins/aws/autoscaling/asgMultiAz.js'),
        'publicS3Origin'                : require(__dirname + '/plugins/aws/cloudfront/publicS3Origin.js'),
        'secureOrigin'                  : require(__dirname + '/plugins/aws/cloudfront/secureOrigin.js'),
        'insecureProtocols'             : require(__dirname + '/plugins/aws/cloudfront/insecureProtocols.js'),
        'cloudfrontHttpsOnly'           : require(__dirname + '/plugins/aws/cloudfront/cloudfrontHttpsOnly.js'),
        'cloudfrontLoggingEnabled'      : require(__dirname + '/plugins/aws/cloudfront/cloudfrontLoggingEnabled.js'),

        'cloudtrailBucketAccessLogging' : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketAccessLogging.js'),
        'cloudtrailBucketDelete'        : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketDelete.js'),
        'cloudtrailEnabled'             : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailEnabled.js'),
        'cloudtrailEncryption'          : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailEncryption.js'),
        'cloudtrailFileValidation'      : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailFileValidation.js'),
        'cloudtrailToCloudwatch'        : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailToCloudwatch.js'),
        'cloudtrailBucketPrivate'       : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketPrivate.js'),

        'configServiceEnabled'          : require(__dirname + '/plugins/aws/configservice/configServiceEnabled.js'),

        'dynamoKmsEncryption'           : require(__dirname + '/plugins/aws/dynamodb/dynamoKmsEncryption.js'),

        'defaultSecurityGroup'          : require(__dirname + '/plugins/aws/ec2/defaultSecurityGroup.js'),
        'elasticIpLimit'                : require(__dirname + '/plugins/aws/ec2/elasticIpLimit.js'),
        'subnetIpAvailability'          : require(__dirname + '/plugins/aws/ec2/subnetIpAvailability.js'),
        'excessiveSecurityGroups'       : require(__dirname + '/plugins/aws/ec2/excessiveSecurityGroups.js'),
        'instanceLimit'                 : require(__dirname + '/plugins/aws/ec2/instanceLimit.js'),
        'instanceMaxCount'              : require(__dirname + '/plugins/aws/ec2/instanceMaxCount.js'),
        'instanceKeyBasedLogin'         : require(__dirname + '/plugins/aws/ec2/instanceKeyBasedLogin.js'),
        'openAllPortsProtocols'         : require(__dirname + '/plugins/aws/ec2/openAllPortsProtocols.js'),
        'openCIFS'                      : require(__dirname + '/plugins/aws/ec2/openCIFS.js'),
        'openDNS'                       : require(__dirname + '/plugins/aws/ec2/openDNS.js'),
        'openFTP'                       : require(__dirname + '/plugins/aws/ec2/openFTP.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/aws/ec2/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/aws/ec2/openHadoopNameNodeWebUI.js'),
        'openKibana'                    : require(__dirname + '/plugins/aws/ec2/openKibana.js'),
        'openMySQL'                     : require(__dirname + '/plugins/aws/ec2/openMySQL.js'),
        'openOracle'                    : require(__dirname + '/plugins/aws/ec2/openOracle.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/aws/ec2/openNetBIOS.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/aws/ec2/openPostgreSQL.js'),
        'openRDP'                       : require(__dirname + '/plugins/aws/ec2/openRDP.js'),
        'openRPC'                       : require(__dirname + '/plugins/aws/ec2/openRPC.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/aws/ec2/openSMBoTCP.js'),
        'openSMTP'                      : require(__dirname + '/plugins/aws/ec2/openSMTP.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/aws/ec2/openSQLServer.js'),
        'openSSH'                       : require(__dirname + '/plugins/aws/ec2/openSSH.js'),
        'openTelnet'                    : require(__dirname + '/plugins/aws/ec2/openTelnet.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/aws/ec2/openVNCClient.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/aws/ec2/openVNCServer.js'),
        'openElasticsearch'             : require(__dirname + '/plugins/aws/ec2/openElasticsearch.js'),
        'vpcElasticIpLimit'             : require(__dirname + '/plugins/aws/ec2/vpcElasticIpLimit.js'),
        'classicInstances'              : require(__dirname + '/plugins/aws/ec2/classicInstances.js'),
        'flowLogsEnabled'               : require(__dirname + '/plugins/aws/ec2/flowLogsEnabled.js'),
        'vpcMultipleSubnets'            : require(__dirname + '/plugins/aws/ec2/multipleSubnets.js'),
        'overlappingSecurityGroups'     : require(__dirname + '/plugins/aws/ec2/overlappingSecurityGroups.js'),
        'publicAmi'                     : require(__dirname + '/plugins/aws/ec2/publicAmi.js'),
        'encryptedAmi'                  : require(__dirname + '/plugins/aws/ec2/encryptedAmi.js'),
        'instanceIamRole'               : require(__dirname + '/plugins/aws/ec2/instanceIamRole.js'),
        'ebsEncryptionEnabled'          : require(__dirname + '/plugins/aws/ec2/ebsEncryptionEnabled.js'),
        'natMultiAz'                    : require(__dirname + '/plugins/aws/ec2/natMultiAz.js'),
        'defaultVpcInUse'               : require(__dirname + '/plugins/aws/ec2/defaultVpcInUse.js'),
        'crossVpcPublicPrivate'         : require(__dirname + '/plugins/aws/ec2/crossVpcPublicPrivate.js'),
        'ebsEncryptedSnapshots'         : require(__dirname + '/plugins/aws/ec2/ebsEncryptedSnapshots.js'),

        'efsEncryptionEnabled'          : require(__dirname + '/plugins/aws/efs/efsEncryptionEnabled.js'),

        'insecureCiphers'               : require(__dirname + '/plugins/aws/elb/insecureCiphers.js'),
        'elbHttpsOnly'                  : require(__dirname + '/plugins/aws/elb/elbHttpsOnly.js'),
        'elbLoggingEnabled'             : require(__dirname + '/plugins/aws/elb/elbLoggingEnabled.js'),
        'elbNoInstances'                : require(__dirname + '/plugins/aws/elb/elbNoInstances.js'),

        'accessKeysExtra'               : require(__dirname + '/plugins/aws/iam/accessKeysExtra.js'),
        'accessKeysLastUsed'            : require(__dirname + '/plugins/aws/iam/accessKeysLastUsed.js'),
        'accessKeysRotated'             : require(__dirname + '/plugins/aws/iam/accessKeysRotated.js'),
        'certificateExpiry'             : require(__dirname + '/plugins/aws/iam/certificateExpiry.js'),
        'emptyGroups'                   : require(__dirname + '/plugins/aws/iam/emptyGroups.js'),
        'iamUserAdmins'                 : require(__dirname + '/plugins/aws/iam/iamUserAdmins.js'),
        'maxPasswordAge'                : require(__dirname + '/plugins/aws/iam/maxPasswordAge.js'),
        'minPasswordLength'             : require(__dirname + '/plugins/aws/iam/minPasswordLength.js'),
        'noUserIamPolicies'             : require(__dirname + '/plugins/aws/iam/noUserIamPolicies.js'),
        'passwordExpiration'            : require(__dirname + '/plugins/aws/iam/passwordExpiration.js'),
        'passwordRequiresLowercase'     : require(__dirname + '/plugins/aws/iam/passwordRequiresLowercase.js'),
        'passwordRequiresNumbers'       : require(__dirname + '/plugins/aws/iam/passwordRequiresNumbers.js'),
        'passwordRequiresSymbols'       : require(__dirname + '/plugins/aws/iam/passwordRequiresSymbols.js'),
        'passwordRequiresUppercase'     : require(__dirname + '/plugins/aws/iam/passwordRequiresUppercase.js'),
        'passwordReusePrevention'       : require(__dirname + '/plugins/aws/iam/passwordReusePrevention.js'),
        'rootAccessKeys'                : require(__dirname + '/plugins/aws/iam/rootAccessKeys.js'),
        'rootAccountInUse'              : require(__dirname + '/plugins/aws/iam/rootAccountInUse.js'),
        'rootMfaEnabled'                : require(__dirname + '/plugins/aws/iam/rootMfaEnabled.js'),
        'sshKeysRotated'                : require(__dirname + '/plugins/aws/iam/sshKeysRotated.js'),
        'usersMfaEnabled'               : require(__dirname + '/plugins/aws/iam/usersMfaEnabled.js'),
        'usersPasswordLastUsed'         : require(__dirname + '/plugins/aws/iam/usersPasswordLastUsed.js'),
        'canaryKeysUsed'                : require(__dirname + '/plugins/aws/iam/canaryKeysUsed.js'),
        'kinesisEncrypted'              : require(__dirname + '/plugins/aws/kinesis/kinesisEncrypted.js'),
        'firehoseEncrypted'             : require(__dirname + '/plugins/aws/firehose/firehoseEncrypted.js'),
        'kmsKeyRotation'                : require(__dirname + '/plugins/aws/kms/kmsKeyRotation.js'),
        'kmsScheduledDeletion'          : require(__dirname + '/plugins/aws/kms/kmsScheduledDeletion.js'),
        'kmsKeyPolicy'                  : require(__dirname + '/plugins/aws/kms/kmsKeyPolicy.js'),
        'kmsDefaultKeyUsage'            : require(__dirname + '/plugins/aws/kms/kmsDefaultKeyUsage.js'),

        'rdsAutomatedBackups'           : require(__dirname + '/plugins/aws/rds/rdsAutomatedBackups.js'),
        'rdsEncryptionEnabled'          : require(__dirname + '/plugins/aws/rds/rdsEncryptionEnabled.js'),
        'rdsLoggingEnabled'             : require(__dirname + '/plugins/aws/rds/rdsLoggingEnabled.js'),
        'rdsPubliclyAccessible'         : require(__dirname + '/plugins/aws/rds/rdsPubliclyAccessible.js'),
        'rdsRestorable'                 : require(__dirname + '/plugins/aws/rds/rdsRestorable.js'),
        'rdsMultiAz'                    : require(__dirname + '/plugins/aws/rds/rdsMultiAz.js'),

        'domainAutoRenew'               : require(__dirname + '/plugins/aws/route53/domainAutoRenew.js'),
        'domainExpiry'                  : require(__dirname + '/plugins/aws/route53/domainExpiry.js'),
        'domainTransferLock'            : require(__dirname + '/plugins/aws/route53/domainTransferLock.js'),

        'bucketAllUsersPolicy'          : require(__dirname + '/plugins/aws/s3/bucketAllUsersPolicy.js'),
        'bucketAllUsersAcl'             : require(__dirname + '/plugins/aws/s3/bucketAllUsersAcl.js'),
        'bucketVersioning'              : require(__dirname + '/plugins/aws/s3/bucketVersioning.js'),
        'bucketLogging'                 : require(__dirname + '/plugins/aws/s3/bucketLogging.js'),

        'notebookDataEncrypted'         : require(__dirname + '/plugins/aws/sagemaker/notebookDataEncrypted.js'),
        'notebookDirectInternetAccess'  : require(__dirname + '/plugins/aws/sagemaker/notebookDirectInternetAccess.js'),

        'dkimEnabled'                   : require(__dirname + '/plugins/aws/ses/dkimEnabled.js'),

        'topicPolicies'                 : require(__dirname + '/plugins/aws/sns/topicPolicies.js'),
        'sqsCrossAccount'               : require(__dirname + '/plugins/aws/sqs/sqsCrossAccount.js'),
        'sqsEncrypted'                  : require(__dirname + '/plugins/aws/sqs/sqsEncrypted.js'),

        'ssmEncryptedParameters'        : require(__dirname + '/plugins/aws/ssm/ssmEncryptedParameters.js'),

        'lambdaOldRuntimes'             : require(__dirname + '/plugins/aws/lambda/lambdaOldRuntimes.js'),
        'lambdaVpcConfig'               : require(__dirname + '/plugins/aws/lambda/lambdaVpcConfig.js'),
        'lambdaPublicAccess'            : require(__dirname + '/plugins/aws/lambda/lambdaPublicAccess.js'),

        'monitoringMetrics'             : require(__dirname + '/plugins/aws/cloudwatchlogs/monitoringMetrics.js'),

        'redshiftEncryptionEnabled'     : require(__dirname + '/plugins/aws/redshift/redshiftEncryptionEnabled.js'),
        'redshiftPubliclyAccessible'    : require(__dirname + '/plugins/aws/redshift/redshiftPubliclyAccessible.js'),

        'transferLoggingEnabled'        : require(__dirname + '/plugins/aws/transfer/transferLoggingEnabled.js')
    },
    azure : {
        'storageAccountsHttps'          : require(__dirname + '/plugins/azure/storageaccounts/storageAccountsHttps.js'),
        'storageAccountsEncryption'     : require(__dirname + '/plugins/azure/storageaccounts/storageAccountsEncryption.js'),
        'blobServiceImmutable'          : require(__dirname + '/plugins/azure/blobservice/blobServiceImmutable.js'),
        'fileServiceAllAccessAcl'       : require(__dirname + '/plugins/azure/fileservice/fileServiceAllAccessAcl.js'),
        'tableServiceAllAccessAcl'      : require(__dirname + '/plugins/azure/tableservice/tableServiceAllAccessAcl.js'),
        'queueServiceAllAccessAcl'      : require(__dirname + '/plugins/azure/queueservice/queueServiceAllAccessAcl.js'),
        'resourceGroups'                : require(__dirname + '/plugins/azure/resourcegroups/resourceGroups.js'),
        'vmAgentEnabled'                : require(__dirname + '/plugins/azure/virtualmachines/vmAgentEnabled.js'),
        'vmDiskOSEncryption'            : require(__dirname + '/plugins/azure/virtualmachines/vmDiskOSEncryption.js'),
        'vmDiskDataEncryption'          : require(__dirname + '/plugins/azure/virtualmachines/vmDiskDataEncryption.js'),
        'vmEndpointProtection'          : require(__dirname + '/plugins/azure/virtualmachines/vmEndpointProtection.js'),
        'vmAutoUpdateEnabled'           : require(__dirname + '/plugins/azure/virtualmachines/vmAutoUpdateEnabled.js'),
        'sqlServerFirewallRuleEnabled'  : require(__dirname + '/plugins/azure/logalerts/sqlServerFirewallRuleEnabled.js'),
        'virtualNetworkRuleEnabled'     : require(__dirname + '/plugins/azure/logalerts/virtualNetworkRuleEnabled.js'),
        'monitorDiskEncryption'         : require(__dirname + '/plugins/azure/securitycenter/monitorDiskEncryption.js')
    },
    github: {
        'publicKeysRotated'             : require(__dirname + '/plugins/github/users/publicKeysRotated.js'),
        'gpgKeysRotated'                : require(__dirname + '/plugins/github/users/gpgKeysRotated.js'),
        'userMfaEnabled'                : require(__dirname + '/plugins/github/users/userMfaEnabled.js'),
        'userPrivateEmails'             : require(__dirname + '/plugins/github/users/userPrivateEmails.js'),
        'orgPlanLimit'                  : require(__dirname + '/plugins/github/orgs/orgPlanLimit.js'),
        'orgDefaultPermission'          : require(__dirname + '/plugins/github/orgs/orgDefaultPermission.js'),
        'orgMfaRequired'                : require(__dirname + '/plugins/github/orgs/orgMfaRequired.js'),
        'orgExcessiveOwners'            : require(__dirname + '/plugins/github/orgs/orgExcessiveOwners.js'),
        // 'repoDeployKeysRotated'         : require(__dirname + '/plugins/github/repos/repoDeployKeysRotated.js')
    },
    oracle: {
        'openSSH'                       : require(__dirname + '/plugins/oracle/core/openSSH.js'),
        'openOracleAutoDataWarehouse'   : require(__dirname + '/plugins/oracle/core/openOracleAutoDataWarehouse.js'),
        'openAllPortsProtocols'         : require(__dirname + '/plugins/oracle/core/openAllPortsProtocols.js'),
        'openRPC'                       : require(__dirname + '/plugins/oracle/core/openRPC.js'),
        'openRDP'                       : require(__dirname + '/plugins/oracle/core/openRDP.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/oracle/core/openVNCServer.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/oracle/core/openVNCClient.js'),
        'openTelnet'                    : require(__dirname + '/plugins/oracle/core/openTelnet.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/oracle/core/openSMBoTCP.js'),
        'openOracle'                    : require(__dirname + '/plugins/oracle/core/openOracle.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/oracle/core/openPostgreSQL.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/oracle/core/openNetBIOS.js'),
        'openMySQL'                     : require(__dirname + '/plugins/oracle/core/openMySQL.js'),
        'openFTP'                       : require(__dirname + '/plugins/oracle/core/openFTP.js'),
        'openCIFS'                      : require(__dirname + '/plugins/oracle/core/openCIFS.js'),
        'openDNS'                       : require(__dirname + '/plugins/oracle/core/openDNS.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/oracle/core/openSQLServer.js')
    }
};
