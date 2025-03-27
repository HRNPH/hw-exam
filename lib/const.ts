export const TRUE_FALSE = "TRUE_FALSE";
export const MULTIPLE_CHOICE = "MULTIPLE_CHOICE";
export const MULTIPLE_SELECT = "MULTIPLE_SELECT";

type examDataType = {
  id: number;
  type: typeof TRUE_FALSE | typeof MULTIPLE_CHOICE | typeof MULTIPLE_SELECT;
  question: string;
  options: { id: string; text: string }[];
  answer: string | string[];
  explanation: string;
};

export const examData: Array<examDataType> = [
  {
    id: 1,
    type: "TRUE_FALSE",
    question:
      "By default, servers deployed in different Huawei Cloud regions can communicate with each other through an internal network",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "b",
    explanation:
      "Servers in different regions cannot communicate through an internal network by default.",
  },
  {
    id: 2,
    type: "TRUE_FALSE",
    question:
      "An availability zone of Huawei cloud belongs to a specific region",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "a",
    explanation:
      "Each availability zone is part of a specific Huawei Cloud region.",
  },
  {
    id: 3,
    type: "TRUE_FALSE",
    question: "After ECS is created, you need to install the OS for the ECS",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "b",
    explanation:
      "ECS comes with an OS installed by default or selected during creation.",
  },
  {
    id: 4,
    type: "TRUE_FALSE",
    question: "When using an ECS, you have full control the guest OS",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "a",
    explanation: "Users have full control over the guest OS of an ECS.",
  },
  {
    id: 5,
    type: "TRUE_FALSE",
    question:
      "Since spot ECSs may be reclaimed at any time, they should not be used in a production environment",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "a",
    explanation:
      "Spot ECSs are not suitable for production as they can be interrupted at any time.",
  },
  {
    id: 6,
    type: "TRUE_FALSE",
    question:
      "Both Object Storage Service(OBS) and Elastic Volume Server(EVS) are storage services, but they are accessed with different methods and are used in different scenarios",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "a",
    explanation: "OBS and EVS serve different use cases and access methods.",
  },
  {
    id: 7,
    type: "TRUE_FALSE",
    question:
      "Direct Connect establishes a dedicated network connection that links your on-premises data center to cloud. With this connection, you can enjoy high-speed, stable and secure data transmission with very little latency",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "a",
    explanation:
      "Direct Connect provides a dedicated, stable, and low-latency link.",
  },
  {
    id: 8,
    type: "TRUE_FALSE",
    question:
      "A public NAT gateway can be used to enable communication between servers in two VPCs that have overlapping CIDR blocks",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "b",
    explanation:
      "Public NAT gateways cannot resolve communication issues in overlapping CIDR scenarios.",
  },
  {
    id: 9,
    type: "TRUE_FALSE",
    question: "EIPs can use dynamic BGP or Static BGP",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "b",
    explanation: "Huawei Cloud EIPs use only dynamic BGP by default.",
  },
  {
    id: 10,
    type: "TRUE_FALSE",
    question:
      "Application Orchestration Service (AOS) is a service specifically designed for automatically deploying containerized applications.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "b",
    explanation:
      "AOS is for infrastructure orchestration, not specifically for containerized applications.",
  },
  {
    id: 11,
    type: "TRUE_FALSE",
    question:
      "MapReduce Service(MRS) is based on the open source Hadoop system. You are advised to build  MRS by yourself",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "b",
    explanation:
      "You are advised to use Huawei's managed MRS rather than building it yourself.",
  },
  {
    id: 12,
    type: "TRUE_FALSE",
    question:
      "There are two types of load balancers: dedicated load balancers and shared load balancers.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "a",
    explanation:
      "Huawei Cloud provides both dedicated and shared load balancers.",
  },
  {
    id: 13,
    type: "TRUE_FALSE",
    question: "ELB supports protocol in either Layer4 or Layer 7",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "a",
    explanation:
      "Elastic Load Balancer (ELB) supports both Layer 4 (TCP) and Layer 7 (HTTP/HTTPS) protocols.",
  },
  {
    id: 14,
    type: "TRUE_FALSE",
    question: "ELB can route requests to backend servers across AZs.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "a",
    explanation: "Huawei ELB supports cross-AZ load balancing.",
  },
  {
    id: 15,
    type: "TRUE_FALSE",
    question:
      "MapReduce Service (MRS) is based on the open source Hadoop system. You are advised to build MRS by yourself",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    answer: "b",
    explanation:
      "Huawei Cloud provides MRS as a managed service, so users are not advised to build it themselves.",
  },
  {
    id: 16,
    type: "MULTIPLE_CHOICE",
    question:
      "In Huawei Cloud application design, which of the following security phases needs to be considered first?",
    options: [
      {
        id: "a",
        text: "Data storage must be encrypted. The core of security is to prevent data leakage.",
      },
      {
        id: "b",
        text: "Network security features are the core, including firewalls and anti-DDoS.",
      },
      {
        id: "c",
        text: "Implement appropriate security measures from different perspectives based on compliance requirements.",
      },
      {
        id: "d",
        text: "Access control is the most important. Improve password strength management and follow the principle of least privilege.",
      },
    ],
    answer: "d",
    explanation:
      "Access control is the foundation of cloud security and should be considered first.",
  },
  {
    id: 17,
    type: "MULTIPLE_CHOICE",
    question:
      "You found that a server was deleted. Which of the following services can help you determine which Identity and Access Management (IAM) user deleted the server?",
    options: [
      { id: "a", text: "Cloud Trace Service (CTS)" },
      { id: "b", text: "Cloud Eye" },
      { id: "c", text: "Elastic Cloud Server (ECS)" },
      { id: "d", text: "Identity and Access Management (IAM)" },
    ],
    answer: "a",
    explanation:
      "Cloud Trace Service (CTS) records operations and helps trace who did what.",
  },
  {
    id: 18,
    type: "MULTIPLE_CHOICE",
    question:
      "According to the shared responsibility security model, which of the following is the responsibility of Huawei Cloud?",
    options: [
      {
        id: "a",
        text: "Configure third-party applications on servers and ensure that the use of the applications complies with security best practices",
      },
      {
        id: "b",
        text: "Protect application login credentials and encrypt application data",
      },
      { id: "c", text: "Maintain and manage physical infrastructure" },
      { id: "d", text: "Control permissions for logging in to jump servers" },
    ],
    answer: "c",
    explanation:
      "Huawei Cloud is responsible for the underlying infrastructure, not customer-side configuration.",
  },
  {
    id: 19,
    type: "MULTIPLE_CHOICE",
    question: "Which of the following statements is false about spot ECS?",
    options: [
      {
        id: "a",
        text: "Spot ECSs should be used as little as possible because they may be reclaimed at any time, leading to service interruptions",
      },
      {
        id: "b",
        text: "It is appropriate to use spot ECSs to handle stateless short-term tasks. Even if the ECSs are reclaimed, all you need is to redo the tasks",
      },
      {
        id: "c",
        text: "The market price of a spot ECS is determined by the users’ bid prices and inventory resources",
      },
      {
        id: "d",
        text: "The final price of a spot ECS is not the users’ bid price, but the spot market price",
      },
    ],
    answer: "d",
    explanation:
      "The final price of a spot ECS *is* determined by the market price, not the user’s bid price.",
  },
  {
    id: 20,
    type: "MULTIPLE_CHOICE",
    question:
      "Due to compliance requirements, some customers do not want to share server hardware with other users or services. Which of the following is not suitable for this scenario?",
    options: [
      { id: "a", text: "Elastic Cloud Server (ECS)" },
      { id: "b", text: "On-premise server" },
      { id: "c", text: "Dedicated Host (DeH)" },
      { id: "d", text: "Bare Metal Server (BMS)" },
    ],
    answer: "a",
    explanation:
      "ECSs run on shared infrastructure and are not suitable for exclusive hardware use.",
  },
  {
    id: 21,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following statements is false about Dedicated Host (DeH)?",
    options: [
      {
        id: "a",
        text: "DeH meets the compliance requirements for exclusive use",
      },
      { id: "b", text: "DeH can be directly used to run your services" },
      {
        id: "c",
        text: "The DeH you purchased hosts only your own ECSs, and the physical resources of the DeH are not shared with others.",
      },
      {
        id: "d",
        text: "When using a DeH, you can determine the number of physical cores based on the software license requirement",
      },
    ],
    answer: "d",
    explanation:
      "You cannot customize the number of physical cores; they are fixed per DeH specification.",
  },
  {
    id: 22,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following statements about the benefits of cloud computing is false?",
    options: [
      { id: "a", text: "Reduced capital expense of fixed assets" },
      {
        id: "b",
        text: "Easy service operations in different geographical locations",
      },
      { id: "c", text: "No need for guessing the capacity" },
      { id: "d", text: "No need to worry about security attacks" },
    ],
    answer: "d",
    explanation:
      "Security is still a shared responsibility; users must manage their own configurations.",
  },
  {
    id: 23,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following is the disadvantage of a traditional single-node database?",
    options: [
      { id: "a", text: "It is hard to scale storage" },
      { id: "b", text: "It is hard to scale compute resources" },
      { id: "c", text: "It is less reliable" },
      { id: "d", text: "All of the above" },
    ],
    answer: "c",
    explanation:
      "Single-node databases are typically less reliable due to lack of redundancy.",
  },
  {
    id: 24,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following is reserved when an RDS DB instance is deleted?",
    options: [
      { id: "a", text: "Automated backup" },
      { id: "b", text: "Primary DB instance" },
      { id: "c", text: "Manual backup" },
      { id: "d", text: "Read replica" },
    ],
    answer: "c",
    explanation:
      "Manual backups are preserved after deletion; automated backups are not.",
  },
  {
    id: 25,
    type: "MULTIPLE_CHOICE",
    question:
      "How many read replicas can be created for an RDS for MySQL primary/standby DB instance?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "20" },
    ],
    answer: "c",
    explanation:
      "RDS for MySQL supports up to 5 read replicas for a primary/standby instance.",
  },
  {
    id: 26,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following cloud services distributes incoming application traffic to each instance in an Auto Scaling group?",
    options: [
      { id: "a", text: "Scalable File Service (SFS)" },
      { id: "b", text: "Cloud Eye" },
      { id: "c", text: "Elastic Load Balance (ELB)" },
      { id: "d", text: "Elastic IP (EIP)" },
    ],
    answer: "c",
    explanation:
      "ELB evenly distributes traffic across instances in an Auto Scaling group.",
  },
  {
    id: 27,
    type: "MULTIPLE_CHOICE",
    question:
      "A customer wants to deploy services on Huawei Cloud. Which of the following can be used to automatically distribute access traffic to Huawei Cloud servers and enable auto scaling of servers to address traffic peaks?",
    options: [
      { id: "a", text: "NAT Gateway and Auto Scaling (AS)" },
      { id: "b", text: "Elastic Load Balancer (ELB) and Auto Scaling (AS)" },
      { id: "c", text: "Elastic IP and Auto Scaling (AS)" },
      { id: "d", text: "Virtual Private Cloud (VPC) and Auto Scaling (AS)" },
    ],
    answer: "b",
    explanation:
      "ELB + Auto Scaling is the best solution for dynamic traffic handling and resource scaling.",
  },
  {
    id: 28,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following statements is false about MapReduce Service (MRS)?",
    options: [
      {
        id: "a",
        text: "MRS is a Huawei Cloud service that can be used to manage the Hadoop system. With MRS, you can deploy the Hadoop cluster with just a few clicks",
      },
      {
        id: "b",
        text: "MRS is a hosted big data service that provides enterprise-level big data clusters on the cloud. Tenants can fully control the clusters. MRS is compatible with the APIs and usage habits of open source big data components.",
      },
      {
        id: "c",
        text: "MRS does not only provide the MapReduce component or Hadoop components. Instead, it contains all common Hadoop big data ecosystem components, such as Hadoop, Spark, HBase, Kafka, and Flink",
      },
      {
        id: "d",
        text: "MRS uses non-commercial open source big data components and does not provide technical support",
      },
    ],
    answer: "d",
    explanation:
      "Huawei Cloud MRS provides support for the big data services it offers.",
  },
  {
    id: 29,
    type: "MULTIPLE_CHOICE",
    question: "Which of the following statements about cloud native is false?",
    options: [
      { id: "a", text: "Design services instead of designing servers" },
      {
        id: "b",
        text: "Cloud native is all about containerizing applications",
      },
      {
        id: "c",
        text: "Serverless development allows developers to focus on features",
      },
      {
        id: "d",
        text: "Containers help implement service logic and reduce attention and coupling to servers",
      },
    ],
    answer: "b",
    explanation:
      "Cloud native is not only about containerization; it includes microservices, DevOps, and CI/CD practices.",
  },
  {
    id: 30,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following functions is not supported by Huawei Cloud Search Service (CSS)?",
    options: [
      { id: "a", text: "OLTP" },
      { id: "b", text: "Log Analysis" },
      { id: "c", text: "Full-text search" },
      { id: "d", text: "Vector retrieval" },
    ],
    answer: "a",
    explanation:
      "CSS (based on Elasticsearch) is not designed for Online Transaction Processing (OLTP).",
  },
  {
    id: 31,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following services can be used to create and manage virtual networks on the cloud?",
    options: [
      { id: "a", text: "Virtual Private Cloud (VPC)" },
      { id: "b", text: "NAT Gateway" },
      { id: "c", text: "Virtual Private Network (VPN)" },
      { id: "d", text: "Elastic Cloud Server (ECS)" },
    ],
    answer: "a",
    explanation:
      "VPC is the core service for defining and managing virtual networks in the cloud.",
  },
  {
    id: 32,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following statements is false about Direct Connect?",
    options: [
      {
        id: "a",
        text: "A dedicated network is used for data transmission, which brings high network performance, low latency, and excellent user experience",
      },
      {
        id: "b",
        text: "Direct Connect establishes private connectivity between an on-premises data center and the cloud. Data is transmitted over a dedicated connection, meeting the requirements for compliance.",
      },
      {
        id: "c",
        text: "A single connection supports up to 100Gbit/s of bandwidth, which meets a diverse range of bandwidth requirements",
      },
      {
        id: "d",
        text: "Direct Connect is cheaper than VPN and easier to configure",
      },
    ],
    answer: "d",
    explanation:
      "Direct Connect is typically more expensive and complex to configure compared to VPN.",
  },
  {
    id: 33,
    type: "MULTIPLE_CHOICE",
    question: "Which of the following is not recommended during subnet design?",
    options: [
      {
        id: "a",
        text: "Use subnets to present logic layers of different applications",
      },
      {
        id: "b",
        text: "Allocate all IP addresses of a subnet to servers to avoid IP address wasting",
      },
      {
        id: "c",
        text: "Create subnets that do not include all of the IP address of the VPC they are in",
      },
      {
        id: "d",
        text: "Reserve some IP addresses in a subnet for dedicated use. If the network planning is appropriate, you do not need to worry about this",
      },
    ],
    answer: "d",
    explanation:
      "It's important to reserve some IPs for system use and future expansion.",
  },
  {
    id: 34,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following operations is not supported on Elastic Volume Service (EVS) disks?",
    options: [
      {
        id: "a",
        text: "Attaching an EVS disk to two Elastic Cloud Servers (ECSs) in different availability zones (AZs) one after another to transmit data, just like using a USB flash drive",
      },
      {
        id: "b",
        text: "Copying the data from EVS disks attached on an ECS to another AZ using EVS backups",
      },
      { id: "c", text: "Attaching two EVS disks to the same ECS" },
      { id: "d", text: "Encrypting EVS disk data" },
    ],
    answer: "a",
    explanation:
      "You cannot use EVS like a USB flash drive across AZs; it requires proper backup or replication strategies.",
  },
  {
    id: 35,
    type: "MULTIPLE_CHOICE",
    question:
      "Which of the following statements about Elastic Volume Service (EVS) is false?",
    options: [
      { id: "a", text: "EVS provides 9 nines durability." },
      { id: "b", text: "The storage space of an EVS disk is unlimited" },
      {
        id: "c",
        text: "EVS disks are similar to physical disks. The storage space on EVS disks is managed by guest operating systems and can be access via OS APIs.",
      },
      {
        id: "d",
        text: "Backups of EVS disks are stored in Object Storage Service (OBS) for improved reliability",
      },
    ],
    answer: "b",
    explanation: "EVS disks have size limits; they are not unlimited.",
  },
  {
    id: 36,
    type: "MULTI_SELECT",
    question:
      "Which of the following statements about data storage security are true?",
    options: [
      {
        id: "a",
        text: "EVS supports disk encryption and Data Encryption Workshop (DEW) manages encryption keys",
      },
      {
        id: "b",
        text: "Object Storage Service (OBS) supports object encryption and DEW manages encryption keys",
      },
      {
        id: "c",
        text: "Local disks support disk encryption and DEW manages encryption keys",
      },
      {
        id: "d",
        text: "OBS supports HTTPS based encryption for data in transit",
      },
    ],
    answer: ["a", "b", "c", "d"],
    explanation:
      "All listed features are valid data storage security capabilities.",
  },
  {
    id: 37,
    type: "MULTI_SELECT",
    question: "What purpose can Object Storage Service (OBS) be used for?",
    options: [
      { id: "a", text: "Static website hosting" },
      { id: "b", text: "Data Backup" },
      {
        id: "c",
        text: "Storage of unstructured data (such as logs and images) that is frequently accessed",
      },
      { id: "d", text: "Big data storage and storage of data lakes" },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "OBS supports all listed use cases.",
  },
  {
    id: 38,
    type: "MULTI_SELECT",
    question:
      "Which of the following services can you use after purchasing DevCloud?",
    options: [
      { id: "a", text: "CodeArts Req (ProjectMan)" },
      { id: "b", text: "CodeArts Repo (CodeHub)" },
      { id: "c", text: "CodeArts Check (CodeCheck)" },
      { id: "d", text: "CodeArts Pipeline (CloudPipeline)" },
      { id: "e", text: "CodeArts Artifact (CloudArtifact)" },
    ],
    answer: ["a", "b", "c", "d", "e"],
    explanation: "DevCloud includes all of the CodeArts modules listed.",
  },
  {
    id: 39,
    type: "MULTI_SELECT",
    question: "What are the application scenarios for DevCloud?",
    options: [
      { id: "a", text: "Internet service providers (ISPs)" },
      { id: "b", text: "Independent software vendors (ISVs)" },
      { id: "c", text: "SaaS providers" },
      { id: "d", text: "University/training institutions" },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "DevCloud is suitable for all the listed organizations.",
  },
  {
    id: 40,
    type: "MULTI_SELECT",
    question:
      "Which of the following image types are available on Huawei Cloud?",
    options: [
      { id: "a", text: "Public images" },
      { id: "b", text: "Marketplace images" },
      { id: "c", text: "Private images" },
      { id: "d", text: "Shared images" },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "Huawei Cloud supports all these image types.",
  },
  {
    id: 41,
    type: "MULTI_SELECT",
    question:
      "Which of the following must be specified when you purchase an ECS?",
    options: [
      { id: "a", text: "AZ where an ECS is deployed" },
      { id: "b", text: "Instance type" },
      { id: "c", text: "Image" },
      { id: "d", text: "Public IP address" },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "All of these are required when launching an ECS.",
  },
  {
    id: 42,
    type: "MULTI_SELECT",
    question:
      "Which of the following are the advantages of Relational Database Service (RDS) over on-premise database?",
    options: [
      { id: "a", text: "High performance" },
      { id: "b", text: "Easier o&M" },
      { id: "c", text: "High availability" },
      {
        id: "d",
        text: "Automatic sharing and application access organization",
      },
    ],
    answer: ["b", "c"],
    explanation:
      "RDS offers ease of operation and high availability; the others depend on context.",
  },
  {
    id: 43,
    type: "MULTI_SELECT",
    question:
      "Which of the following features should be considered when selecting a database service?",
    options: [
      { id: "a", text: "Data structure" },
      {
        id: "b",
        text: "The type of application for example if it has special transaction or complex query requirements",
      },
      { id: "c", text: "Estimated data volume of an application" },
      {
        id: "d",
        text: "Performance requirements for an application to access database",
      },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "All factors are relevant in database service selection.",
  },
  {
    id: 44,
    type: "MULTI_SELECT",
    question: "Which of the following are sources of application data?",
    options: [
      { id: "a", text: "Structured transaction data in database" },
      {
        id: "b",
        text: "Unstructured data such as logs and files in OBS and other storage types",
      },
      {
        id: "c",
        text: "Large volume of data extracted, transformed and loaded to data warehouse",
      },
      { id: "d", text: "Data streams from IoT devices or users" },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "All listed options are common sources of application data.",
  },
  {
    id: 45,
    type: "MULTI_SELECT",
    question:
      "Which of the following do you need to configure when you are using ELB?",
    options: [
      { id: "a", text: "Listener" },
      { id: "b", text: "Backend server group" },
      { id: "c", text: "Load Balancing algorithm" },
      { id: "d", text: "Health check" },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "All components are necessary for proper ELB configuration.",
  },
  {
    id: 46,
    type: "MULTI_SELECT",
    question:
      "Which of the following statements about VPC and subnet planning are true?",
    options: [
      {
        id: "a",
        text: "Each VPC should have no more than 5000 IP addresses. If there are too many IP address needed, multiple VPCs are required",
      },
      {
        id: "b",
        text: "Resources in a VPC can communicate with each other and have to belong to the same account.",
      },
      {
        id: "c",
        text: "VPCs are isolated by default. If you want to enable VPCs in same region to communicate through private networks, use VPC peering connection.",
      },
      {
        id: "d",
        text: "Subnets are used for multi-level resource management. Subnets in VPC can communicate with each other by default. Network ACLs can be used to control network access between subnets",
      },
    ],
    answer: ["b", "c", "d"],
    explanation:
      "Only option a is incorrect; the rest are true about VPC planning.",
  },
  {
    id: 47,
    type: "MULTI_SELECT",
    question:
      "Which of the following do you need to configure when you buy an Elastic Cloud Server (ECS)?",
    options: [
      { id: "a", text: "Virtual Private Cloud (VPC)" },
      { id: "b", text: "Subnet" },
      { id: "c", text: "Security group" },
      { id: "d", text: "Private IP address in the VPC" },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "All listed options must be configured when creating an ECS.",
  },
  {
    id: 48,
    type: "MULTI_SELECT",
    question:
      "Which of the following statements about services on Huawei Cloud are true?",
    options: [
      {
        id: "a",
        text: "When you need servers, you can choose Elastic Cloud Server (ECS)",
      },
      {
        id: "b",
        text: "When you need databases, you can choose Relational Database Service (RDS)",
      },
      {
        id: "c",
        text: "When you need a network environment, you can choose Virtual Private Cloud (VPC)",
      },
      {
        id: "d",
        text: "When you need server disks, you can choose Scalable File Service (SFS)",
      },
    ],
    answer: ["a", "b", "c"],
    explanation:
      "SFS is for shared storage, not ECS disks; others are correct.",
  },
  {
    id: 49,
    type: "MULTI_SELECT",
    question:
      "Which of the following are Application Orchestration Service (AOS) best practices?",
    options: [
      {
        id: "a",
        text: "Manage template file changes using code management tools",
      },
      {
        id: "b",
        text: "Because AOS is free of charge, it is advised to use AOS to start Elastic Cloud Server (ECS) instances instead of purchasing them on the ECS console",
      },
      {
        id: "c",
        text: "Modify or update existing sample templates or available templates instead of always writing new ones whenever possible",
      },
      {
        id: "d",
        text: "The supply department that shares components such as the cyber security department that supplies the standard VPC settings, can provide standard templates to restrict other departments to specific resources",
      },
    ],
    answer: ["a", "b", "c", "d"],
    explanation:
      "All listed practices help improve automation and governance using AOS.",
  },
  {
    id: 50,
    type: "MULTI_SELECT",
    question:
      "Which of the following information can be used by Identity and Access Management (IAM) to identify a visitor?",
    options: [
      { id: "a", text: "The password of the root user in Linux" },
      { id: "b", text: "The password of the administrator in Windows" },
      {
        id: "c",
        text: "The account name, IAM user name, and password on the Huawei Cloud console",
      },
      { id: "d", text: "The AK/SK for accessing Huawei Cloud APIs" },
    ],
    answer: ["c", "d"],
    explanation:
      "Only the credentials within IAM (user/password or AK/SK) are used for access and identification.",
  },
];
