import Users from "../models/user/userModel.js";
import Profile from "../models/user/profile/ProfileModel.js";
import ProfileImgs from "../models/user/profile/profileImgModel.js";
import path from "path"

export const getUser = async (req, res) => {
    try {

    } catch (error) {

    }
};

export const getUserById = async (req, res) => {

};

export const createUser = async (req, res) => {
    if (req.files === null) return res.status(402).json({ msg: "foto tidak boleh kosong" });
    const { name, email, password, confirmPassword, role, full_name, bio, jenis_kelamin } = req.body;

    const { file } = req.files;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images-profile/${fileName}`;
    const fileAllow = [".png", ".jpg", ".jpeg"];
    if (!fileAllow.includes(ext.toLocaleLowerCase())) return res.status(402).json({ msg: "invalid images" });
    if (fileSize > 5000000) return res.status(402).json({ msg: "file terlalu besaar nggk kuat" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: "salah di file.mv" })
        try {

            const user = await Users.create({
                name, email, password, confirmPassword, role
            });
            const profile = await Profile.create({
                full_name, bio, jenis_kelamin, userId: user.id
            })
            await ProfileImgs.create({
                img_name: fileName,
                img_url: url,
                profileId: profile.id
            })
            res.status(200).json({ msg: "product telah di buat" })
            // try {
            //     await user.setProfile(profile);
            //     await profile.setProfileImgs(profileImg);
            //     res.status(200).json({ msg: "product berhasil di buat" })
            // } catch (error) {
            //     res.status(500).json({ msg: "assossiation error" })
            // }
        } catch (error) {
            res.status(500).json({ msg: "syntax create product error" })
        }
    })
};

export const updateUser = async (req, res) => {

};

export const deleteUser = async (req, res) => {

};