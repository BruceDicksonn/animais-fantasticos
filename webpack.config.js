const path = require('path');

module.exports = {
    entry: './js/script.js', // arquivo de entrada
    output: { // arquivo de output ( deve possuir obrigatoriamento o diretório onde será salvo e o nome do arquivo que será criado )
        path: path.resolve(__dirname, './'),
        filename: 'main.js'
    },
    module: { // aqui nós indicamos que o webpack usará o modulo do babel
        rules: [ // obrigatório definir as regras do módulo em um array onde cada regra é um objeto
            {
                test: /\.js$/, // indica em quais arquivos essa regra será aplicada, no caso, em qualquer arquivo que termine com .js segundo a regex indicada
                exclude: /node_modules/, // indica em quais arquivos ou diretórios as regras não serão aplicadas
                use : { // indica tudo que será usado por essa regra
                    loader: 'babel-loader', // o loader define como o Webpack irá ler e exportar os assets do seu projeto, nesse caso, usando o loader do babel e não o próprio.
                    options: { // essas são as opções do loader, quais presets e plugins o loader usará, nesse caso indica os plugins que baixamos do babel
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}