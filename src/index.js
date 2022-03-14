var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: '202.140.139.66',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin'
});

const addBucket = async(bucketName) => {

    minioClient.makeBucket(bucketName, function(err) {
        if (err) {
            return err.toString();
        } else {
            return "Bucket Created Success";
        }
    });

}


const test = async() => {
    var message = await addBucket("mybucket1");
    console.log(message);
}

test();


// minioClient.listBuckets(function(err, buckets) {
// //     if (err) return console.log(err)
// //     console.log('buckets :', buckets)
// // });
//
//
//
// // minioClient.removeBucket('mybucket', function(err) {
// //     if (err) return console.log(err)
// //     console.log('Bucket removed successfully.')
// // })
//   
//
//   // var data = []
//   // var stream = minioClient.listObjects('mybucket','', true)
//   // stream.on('data', function(obj) { data.push(obj) } )
//   // stream.on("end", function (obj) { console.log(data) })
//   // stream.on('error', function(err) { console.log(err) } )
//
//
//   // minioClient.removeObject('mybucket', 'Screenshot 2022-03-12 at 11.49.17 PM.png', function(err) {
//   //     if (err) {
//   //       return console.log('Unable to remove object', err);
//   //     }
//   //     console.log('Removed the object');
//   // });
//
//   // console.log(minioClient);
