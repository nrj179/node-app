console.log(process.env.JAVA_HOME);

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
});

const n = require('./test02')

console.log(n.name)

const a = () => {
    console.log('inside a');
    console.trace();
};

//a();