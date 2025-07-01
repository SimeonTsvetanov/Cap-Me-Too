# Contributing to CapMeToo

Thank you for your interest in contributing to CapMeToo! This document provides guidelines and information for contributors.

## 🤝 Ways to Contribute

### 🐛 Bug Reports
- Use the [issue tracker](https://github.com/your-username/capmetoo/issues)
- Search existing issues before creating new ones
- Provide detailed reproduction steps
- Include browser/device information

### 💡 Feature Requests
- Check [existing discussions](https://github.com/your-username/capmetoo/discussions)
- Explain the use case and benefits
- Consider implementation complexity
- Be open to alternative solutions

### 🔧 Code Contributions
- Fork the repository
- Create a feature branch
- Follow coding standards
- Add tests for new features
- Update documentation

### 📖 Documentation
- Fix typos and improve clarity
- Add examples and use cases
- Translate to other languages
- Update outdated information

## 🚀 Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Google AI API key (for testing)

### Local Setup
\`\`\`bash
# Fork and clone the repository
git clone https://github.com/your-username/capmetoo.git
cd capmetoo

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
\`\`\`

### Environment Variables
\`\`\`bash
# .env.local
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here  # Optional for development
\`\`\`

## 📝 Coding Standards

### TypeScript
- Use strict TypeScript configuration
- Provide proper type definitions
- Avoid `any` types when possible
- Use meaningful variable names

### React Components
- Use functional components with hooks
- Implement proper prop types
- Add JSDoc comments for complex components
- Follow the existing component structure

### Styling
- Use Tailwind CSS classes
- Follow the design system
- Maintain responsive design
- Test on multiple screen sizes

### File Organization
\`\`\`
components/
├── app/           # App-specific components
├── layout/        # Layout components
├── modals/        # Modal components
├── ui/            # Reusable UI components
└── setup/         # Setup-related components

hooks/             # Custom React hooks
utils/             # Utility functions
types/             # TypeScript type definitions
\`\`\`

## 🧪 Testing

### Running Tests
\`\`\`bash
npm run test        # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:e2e    # Run end-to-end tests
\`\`\`

### Writing Tests
- Add unit tests for utility functions
- Test component behavior, not implementation
- Mock external dependencies
- Use descriptive test names

### Test Structure
\`\`\`typescript
describe('Component Name', () => {
  it('should render correctly', () => {
    // Test implementation
  })

  it('should handle user interactions', () => {
    // Test implementation
  })
})
\`\`\`

## 📋 Pull Request Process

### Before Submitting
1. **Test Thoroughly**: Ensure all tests pass
2. **Check Linting**: Run `npm run lint`
3. **Update Documentation**: Add/update relevant docs
4. **Test Mobile**: Verify mobile responsiveness
5. **Check Accessibility**: Ensure WCAG compliance

### PR Guidelines
- Use descriptive titles and descriptions
- Reference related issues
- Include screenshots for UI changes
- Keep changes focused and atomic
- Respond to review feedback promptly

### PR Template
\`\`\`markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Mobile testing done

## Screenshots
(If applicable)

## Related Issues
Fixes #123
\`\`\`

## 🎨 Design Guidelines

### Visual Design
- Follow the existing design system
- Use consistent spacing and typography
- Maintain the glass morphism aesthetic
- Ensure proper contrast ratios

### User Experience
- Keep interactions intuitive
- Provide clear feedback
- Handle loading and error states
- Optimize for mobile-first

### Accessibility
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers

## 🌍 Internationalization

### Adding Translations
- Use the existing i18n structure
- Provide complete translations
- Test with longer text strings
- Consider RTL languages

### Translation Files
\`\`\`
locales/
├── en/
│   ├── common.json
│   └── ui.json
└── es/
    ├── common.json
    └── ui.json
\`\`\`

## 📦 Release Process

### Version Numbering
- Follow [Semantic Versioning](https://semver.org/)
- Major: Breaking changes
- Minor: New features
- Patch: Bug fixes

### Release Checklist
- [ ] Update version numbers
- [ ] Update CHANGELOG.md
- [ ] Test on multiple browsers
- [ ] Update documentation
- [ ] Create release notes

## 🆘 Getting Help

### Communication Channels
- **GitHub Discussions**: General questions and ideas
- **GitHub Issues**: Bug reports and feature requests
- **Email**: Direct contact for sensitive issues

### Code Review
- Be respectful and constructive
- Focus on the code, not the person
- Explain reasoning behind suggestions
- Acknowledge good practices

## 🏆 Recognition

Contributors are recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page
- Special thanks in documentation

## 📄 License

By contributing to CapMeToo, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making CapMeToo better for everyone!** 🎉
