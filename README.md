# webapp-nodejs
Web Application with docker microservices

# [Why use node.js with Docker ?]
* Speeds up the Application Deployment Process
* Application Portability Increases
* Simplifies that version control process
* Promotes Component Reuse
* Very light Footprint & puts less overhead on app

# [Node.js With Docker]
=> create Node.js Application
=> Create Docker file
=> Build Docker Image
=> Execute

---------------
## Docker vs VM
---------------

# [Benefits of Virtual Machines]
1) All OS resources available to apps
2) Established management tools
3) Established security tools
4) Better known security controls
5) Vmware, Hyper-V, KVM, Virtualbox, Xen
	04:39:54

# [Docker Containers]

App      | App2
Bins/Libs| Bins/Libs
----------------------
  Container Manager
----------------------
   Host OS
----------------------
  Infrastructure
----------------------

[ Types of Containers? ]
==> Linux Containers(LXC)
* Commonlly known as LXC
* It is linux operating system level virtualization method for running multiple isolated linux systems on a single host.

=> Docker
* To build single-application LXC containsers.
* More portable and flexible to use.
* Later morphed into its own container runtime environment.
* At a high level, Docker is a linux utility that can efficiently create, ship and run containers.

=> Benefits of Containers
* Quicker Spining
* Security Updates
* Less Code
* Reduced size of snapshots
* Reduced IT Management Resources
* Popular Container Provider i.e. Linux Containers, Docker, Windows Server 
04:42:51

=> Major Differences
1) OS-Support
Containers:
	- Hosted on a single physical server
	- Suitable for running multiple applications over a single OS kernal
Virtual machines:
	- Have a host OS and individual guiest OS inside each VM
	- Required for applications or services.

2) Security
	- Docker: Has access to the kernal subsystems
	- VM: provides root access to applications
	- Own kernel and security features

3) Portability
Docker:
	- Containers are self-contained packages that can run the required application.
	- Light-weight architecture
	- For development puposes Docker containers are the ideal choice
VM:
	- Are isolated server instances with their own OS

4) Performance
Docker:
	- Light-Weight architecure and start up very fast compared o VM,
	- Resource usage also varies among the two
	- CPU, memory, I/O etc usage varies with the load
VMs:
	- No need to allocate resources permanently to containers
	- Has to load an entire OS to start

# [Kubernetes vs. Docker Swarm]
=> Kubernetes
	- Created by Google; now maintained by CNCF
	- Backed by huge developer community
	- Preferable for complex architecure
	- Better when 100s-1000s containers are prod

=> Docker Swarm
	- Created by Docker inc.
	- Developer community not as big as K8s
	- Preferred for simple architecture
	- Better when 10-20 containers are in prod
## Note : Both "Kubernets" and "Docker Swarm" are Container Orchestration tools.

1) Intallation & Cluster Configuration
Kubernetes:
	- Setting up the cluster is challenging & complicated
	- Cluster Strenght is Stronger
Docker Swarm:
	- Setting up the cluster is simple requires only 2 commands
	- Cluster Strength not a Stronger

2) GUI
Kubernetes :
	- Provides a GUI
	- with GUI, apps can be easily
		* scaled
		* Deployed
Docker Swarm : No GUI

3) Scalability 
Kubernetes : Scaling up is easy
Docker Swarm : Scaling up is 5x faster than Kubernetes

4) Auto-Scaling
Kubernetes : Based on server traffic, containers will be scaled automatically by Kubernetes.
Docker Swarm : Scaling up or scaling down has to be done manually.

5)Load Balancing
Kubernetes : Mannual configuration needed for load balancing traffic
Docker Swarm : Swarm does auto load balancing

6) Rolling Updates & Rollbacks
Kubernetes :
	- Rolling updates progressively updates the Pods one after the other while ensuring HA.
	- Automatic Rollbacks in case of failure.
Docker Swarm :
	- Rolling updates progressively updates the containers one after the other while ensuring HA
	- No automatic Rollbacks

7) Data Volumes
Kubernetes : 
	- Storage Volumes shared only between containers within the same Pod
Docker Swarm :
	- Storage Volumes can be shared with any other container in the node

8) Logging & Monitoring
Kubernetes : In-built loggin and monitoring tools in place
Docker Swarm : 3rd party logging & monitoring tools should be used


