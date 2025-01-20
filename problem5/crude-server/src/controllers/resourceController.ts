import { Request, Response } from 'express';
import Resource from '../models/resource';

// Create a new resource
export const createResource = async (req: Request, res: Response) => {
    try {
        const resource = new Resource(req.body);
        await resource.save();
        res.status(201).send(resource);
    } catch (error) {
        res.status(400).send(error);
    }
};

// List resources with basic filters
export const listResources = async (req: Request, res: Response) => {
    try {
        const resources = await Resource.find(req.query);
        res.status(200).send(resources);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get details of a resource
export const getResource = async (req: Request, res: Response) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            return res.status(404).send();
        }
        res.status(200).send(resource);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update resource details
export const updateResource = async (req: Request, res: Response) => {
    try {
        const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!resource) {
            return res.status(404).send();
        }
        res.status(200).send(resource);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a resource
export const deleteResource = async (req: Request, res: Response) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if (!resource) {
            return res.status(404).send();
        }
        res.status(200).send(resource);
    } catch (error) {
        res.status(500).send(error);
    }
};