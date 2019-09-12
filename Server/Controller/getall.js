import Models from '../Models/db';

const getAll =(req, res) =>{
    if(!Models) {
        return res.status(404).send({
            status: 404,
            error: 'no entries found',
          });
    } else {
        return res.status(200).send({
            status:200,
            data: Models
        })
    }
 }
 //export default getAll;
 module.exports = getAll;

// function getview(){
//     if (db)({
//         status:200,
//        message: 'view retrieved',
//       view:db,
//     }));
    
//     else{
//         res.send({
//             status:404,
//            message: 'No entry found',
//           view:db,
//         });

//     }
// }
// export default getview();
