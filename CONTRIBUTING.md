# Contributing to CATE

Thank you for your interest in contributing to CATE! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm
- Git

### Setup

`ash
# Clone the repository
git clone https://github.com/giuseppegmn/cate-risk-engine.git
cd cate-risk-engine

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

## 🧪 Testing
We use Vitest for testing. All contributions must include tests.

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

Test Coverage Requirements
Risk Engine: >80% coverage
Crypto/Signing: >80% coverage
New features: Must include tests

## 📝 Code Style
TypeScript: Strict mode enabled
ESLint: Run npm run lint before committing
Prettier: Format code automatically

## 🔄 Pull Request Process
Fork the repository
Create a feature branch: git checkout -b feature/amazing-feature
Make your changes
Add tests for new functionality
Ensure all tests pass: npm test
Commit with clear messages
Push to your fork
Open a Pull Request

## 🐛 Bug Reports
Please include:
Clear description of the bug
Steps to reproduce
Expected vs actual behavior
Environment details (OS, Node version, etc.)

## 💡 Feature Requests
We welcome feature requests! Please open an issue with:
Clear use case
Proposed solution
Alternative solutions considered

## 🔒 Security
If you discover a security vulnerability, please email security@cate.dev instead of opening a public issue.

## 📜 Code of Conduct
Be respectful, constructive, and inclusive. Harassment will not be tolerated.

Thank you for contributing to CATE! 🎉
