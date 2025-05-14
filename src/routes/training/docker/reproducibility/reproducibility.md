# Reproducibility

When developing research software, managing dependencies is crucial for reproducibility. There are few different approaches to dependency management and we can think of them like different levels. Each level offers us different amounts of reproducibility with increasing complexity and more significant time cost.

## Requirements Files (requirements.txt)

The simplest approach to Python dependency management is a `requirements.txt` file. This is essentially a list of Python packages and their versions:

```text
numpy==1.21.0
pandas==1.3.0
scikit-learn==0.24.2
matplotlib==3.4.2
```

You can create this file by running:
```bash
pip freeze > requirements.txt
```

And someone else can recreate your environment with:
```bash
pip install -r requirements.txt
```

### Advantages
- Simple and easy to understand
- Works with pip, Python's package installer
- Can be generated automatically
- Widely supported

### Limitations
- Only captures Python packages
- Misses system dependencies
- No guarantee of binary compatibility
- Platform-specific packages may fail
- Can't specify version ranges
- May include unnecessary dependencies


## Modern Python Projects (pyproject.toml)

`pyproject.toml` is a newer, more sophisticated approach to Python dependency management. It follows modern Python packaging standards (PEP 517/518):

```toml
[project]
name = "myresearch"
version = "0.1.0"
description = "My Research Project"
requires-python = ">=3.8"

dependencies = [
    "numpy>=1.21.0",
    "pandas~=1.3.0",
    "scikit-learn>=0.24.2,<0.25.0",
]

[project.optional-dependencies]
viz = [
    "matplotlib>=3.4.0",
    "seaborn>=0.11.0",
]
```

### Advantages
- More flexible version specifications
- Can define optional dependency groups
- Includes project metadata
- Better dependency resolution
- Can specify build requirements
- More maintainable

### Limitations
- Still Python-specific
- Doesn't handle system dependencies
- Environment variables not captured
- No guarantee of system library versions
- Can't manage non-Python tools


## Conda and Environment.yml

Conda takes a middle ground between simple Python package management and full containerization. It manages both Python and non-Python dependencies, including system-level binary packages:

```yaml
name: myresearch
channels:
  - conda-forge
  - bioconda
  - defaults
dependencies:
  - python=3.9
  - numpy=1.21
  - pandas=1.3
  - scikit-learn=0.24
  - pip
  - gcc
  - pip:
    - some-package-only-on-pip==1.0
```

We can create an environment from this file with:
```bash
conda env create -f environment.yml
conda activate myresearch
```

and we can export the environment with:
```bash
conda env export > environment.yml
```

### Advantages
- Manages both Python and non-Python packages
- Handles binary dependencies
- Cross-platform compatibility
- Environment isolation
- Popular in scientific computing
- Can mix conda and pip packages
- Solves dependency conflicts well
- Includes many scientific packages pre-built

### Limitations
- Slower than pip installation
- Can be complex to maintain
- Environment setup can be large
- Not as complete as Docker (no OS-level isolation)
- Channel conflicts can occur
- Still platform-dependent


## Docker: Complete Environment Management

Docker takes a fundamentally different approach by capturing the entire computational environment.


### Advantages
- Captures complete environment:
  - Operating system version
  - System libraries
  - Python installation
  - Python packages
  - System dependencies
  - Environment variables
  - File system setup
- Highly portable
- Platform independent
- Can include non-Python tools
- Reproducible builds

### Limitations
- Larger file size
- Requires Docker installation
- Learning curve
- Some performance overhead
- Hardware-specific issues may still exist


## Best Practices

1. **Start simple**
    - Begin with `requirements.txt` during initial development
    - Move to `pyproject.toml` as project matures
    - Add Docker when needed for full environment control

2. **Version Control**
    - Keep all dependency files in version control
    - Include clear documentation
    - Tag/version important states

3. **Documentation**
    - Document any special requirements
    - Include setup instructions
    - Note known limitations
    - Specify minimum requirements

4. **Testing**
    - Test in clean environments
    - Verify installation procedures
    - Include test data
    - Document expected outputs

Remember: The goal is to make your research reproducible with minimal friction. Choose the simplest tool that meets your needs, but don't hesitate to use Docker when you need complete environment control.

## Conda?

No.