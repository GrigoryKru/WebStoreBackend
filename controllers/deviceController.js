const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
const { where } = require('sequelize');

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;

      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      await img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        const info = JSON.parse(info);

        const deviceInfoRecords = infoItems.map((item) => ({
          title: item.title,
          description: item.description,
          deviceId: device.id,
        }));

        await DeviceInfo.bulkCreate(deviceInfoRecords);
      }

      res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      let { brandId, typeId, limit, page } = req.query;

      page = parseInt(page) || 1;
      limit = parseInt(limit) || 10;
      let offset = (page - 1) * limit;

      const queryOptions = {
        limit,
        offset,
        where: {},
      };

      if (brandId) queryOptions.where.brandId = parseInt(brandId);
      if (typeId) queryOptions.where.typeId = parseInt(typeId);

      const devices = await Device.findAndCountAll(queryOptions);

      return res.json(devices);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    });

    return res.json(device);
  }
}

module.exports = new DeviceController();
