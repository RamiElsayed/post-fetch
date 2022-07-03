const { path } = reuquire('path');

const renderPage = (req,res) => {
    res.sendFile(path.join(__dirname, '../../../public/index.html'))
};

module.exports = {
    renderPage,
};