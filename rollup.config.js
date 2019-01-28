import babel from 'rollup-plugin-babel'
import less from 'rollup-plugin-less'

let config = {
    entry: './src/index.js',
	targets: [
		{ format: 'umd', dest: './bundle/modal.js' },
		// { format: 'umd', dest: './demo/modal.js' },
		{ format: 'es', dest: './bundle/modal.es.js' },
	],
	moduleName: 'modal',
	plugins: [
        less({
            output: './bundle/modal.css'
        }),       
        // babel({
        //     exclude: 'node_modules/**'
        // })
    ]
};


export default config
