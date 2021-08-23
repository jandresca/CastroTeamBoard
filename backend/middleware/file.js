const upload = async (req, res, next) => {
    if (req.files.image.type == null) {
        next();
    }else {
        if ( req.files.image.type) {
            let type = req.files.image.type;
            if (
                type !== "image/png" &&
                type !== "iamge/jpg" &&
                type !== "iamge/jpeg" &&
                type !== "iamge/gif"
            ){
                return res.status(400).send("Invalid format: only .png .jpg .jpeg .gif");
            }else {
                next();
            }
        }
    }
};

module.exports = upload;