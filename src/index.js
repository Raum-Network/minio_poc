var Minio = require('minio');


exports.addBucket = async(minioClient, bucketName) => {
    minioClient.makeBucket(bucketName, function(err) {
        if (err) {
            return err.toString();
        } else {
            return "Bucket created success";
        }
    });
}


exports.deleteBucket = async(minioClient, bucketName) => {
    minioClient.removeBucket(bucketName, function(err) {
        if (err) {
            return err.toString();
        } else {
            return "Bucket removed successfully";
        }
    });
}


exports.deleteBucketObject = async(minioClient, bucketName, bucketObject) => {
    minioClient.removeObject(bucketName, bucketObject, function(err) {
        if (err) {
          return err.toString();
        } else {
            return "Removed the object";
        }
    });
}


exports.retrieveBuckets = async(minioClient) => {
    minioClient.listBuckets(function(err, buckets) {
        if (err) {
            return err.toString();
        } else {
            return buckets;
        }
    });
}


exports.retrieveBucketObjects = async(minioClient, bucketName) => {
    var data = []
    var stream = minioClient.listObjects('mybucket','', true)
    
    stream.on('data', function(obj) { 
        data.push(obj) 
    });
    
    stream.on("end", function (obj) { 
        return data; 
    });

    stream.on('error', function(err) { 
        return err.toString();
    });
}
