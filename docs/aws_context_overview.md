# AWS Context

[AWS Context](https://aws.amazon.com/blogs/machine-learning/context-intelligence-for-your-data-and-ai-agents-at-scale/) is an automated knowledge graph service by Amazon Web Services that maps organizational data relationships, business rules, and domain context so AI agents can reason across structured and unstructured sources at runtime.

### Key Features
* **Self-Improving Learning Loop:** The graph tracks how agents query data, observing which join paths and sources produce accurate results, and automatically re-ranks and shares discoveries across the organization without manual re-curation.
* **Open & Portable Standards:** Publishes core metadata in Apache Iceberg format directly to Amazon S3 Tables, allowing querying via Amazon Athena, Amazon Redshift, Apache Spark, or any Iceberg-compatible engine.
* **Governed Access:** Inherits native security controls from AWS IAM and AWS Lake Formation, keeping data access auditable and secure through existing enterprise identities.
* **Ecosystem Integration:** Connects seamlessly with the [AWS Glue Data Catalog](https://aws.amazon.com/blogs/machine-learning/context-intelligence-for-your-data-and-ai-agents-at-scale/), Amazon SageMaker Unified Studio, and supports third-party data catalogs.
* **Standardized APIs:** Exposes context to AI workloads using agentic search APIs and Model Context Protocol (MCP) tools across Amazon Bedrock AgentCore, Amazon EKS, or other MCP frameworks.

### Part of a Broader Context Stack
AWS Context is part of an integrated context intelligence stack introduced alongside [Amazon S3 Annotations](https://aws.amazon.com/blogs/machine-learning/context-intelligence-for-your-data-and-ai-agents-at-scale/) (for attaching business metadata at the storage layer) and AWS Glue Data Catalog skill assets (for linking runbooks and domain patterns at the catalog layer).
