
import Equipment from "../models/equipmentModel.js";

// CREATE
export const createEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.create(req.body);

        res.status(201).json({
            message: "Equipment created successfully",
            data: equipment
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// READ ALL
export const getAllEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.findAll();

        res.status(200).json({
            data: equipment
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// READ ONE
export const getEquipmentById = async (req, res) => {
    try {
        const equipment = await Equipment.findByPk(req.params.id);

        if (!equipment) {
            return res.status(404).json({
                message: "Equipment not found"
            });
        }

        res.status(200).json({
            data: equipment
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// UPDATE
export const updateEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.findByPk(req.params.id);

        if (!equipment) {
            return res.status(404).json({
                message: "Equipment not found"
            });
        }

        await equipment.update(req.body);

        res.status(200).json({
            message: "Equipment updated successfully",
            data: equipment
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// DELETE
export const deleteEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.findByPk(req.params.id);

        if (!equipment) {
            return res.status(404).json({
                message: "Equipment not found"
            });
        }

        await equipment.destroy();

        res.status(200).json({
            message: "Equipment deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
