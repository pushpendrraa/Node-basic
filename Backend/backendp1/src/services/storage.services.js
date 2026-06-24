const Imagekit=require('@imagekit/nodejs');

const imagekit= new Imagekit({
    privateKey:"private_WzE2GZJO17IxkmNY3cOKafTf4M0=",
    // publicKey:"public_5rd7/Ptdl1RfszQsvn7ZApglwWw="
})

async function uploadFile(buffer){
    
    const result= await imagekit.files.upload({
        file: buffer.toString("Base64"),
        fileName:"image.jpg"
    })
    return result;
}
module.exports=uploadFile;