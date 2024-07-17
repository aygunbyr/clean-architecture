import { Console } from "console";
import { Request, Response, NextFunction } from "express";

// Error-handling middleware
function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(err.stack); // Log the error stack trace for debugging

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    // Optionally, you can add a stack trace for development mode
    // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
}

export default errorHandler;
