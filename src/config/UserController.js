import UserModel from '../dao/models/userModel.js';

class UserController {
    async changeUserRole(req, res) {
        const { uid } = req.params;
        const { role } = req.body;

        try {
            const user = await UserModel.findById(uid);
            if (!user) {
                return res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
            }
            if (role !== 'user' && role !== 'premium') {
                return res.status(400).json({ status: 'error', message: 'Rol de usuario no válido' });
            }

            user.role = role;
            await user.save();

            res.json({ status: 'success', message: 'Rol de usuario actualizado correctamente' });
        } catch (error) {
            console.error('Error al cambiar el rol de usuario:', error);
            res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        }
    }
}

export default UserController;
