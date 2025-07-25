const{ShortenURL} = require('url-shortner_chirayu')

async function main() {
    const args = process.argv.slice(2);
    // if(args.length!==1){

    //c }
    const urltoshorten = args[0];
    if(!urltoshorten.startsWith('http://') && !urltoshorten.startsWith('https://')) {
        console.error("NOt a valis URL");
        return;
    }

    try{
        const shortUrl = await ShortenURL(urltoshorten);
           console.log("\n" + "=".repeat(30));
        console.log(`   ${shortUrl}`);
        console.log("=".repeat(30));
    }
    catch(error){
         console.error("\n" + "=".repeat(30));
        console.error(`${error.message}`);
        console.error("=".repeat(30));
    }
}
main();