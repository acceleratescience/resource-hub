# Hello Docker!

To get us started let's run a simple Docker container. This is the `Hello World` of Docker.

In your codespace environment, you can essentially maximize the terminal by dragging it to the top of the screen. This will give you more space to work with.

In the terminal, run the following command:

```bash
docker run hello-world
```

You should then see something like the following:

```text
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
c1ec31eb5944: Pull complete 
Digest: sha256:d211f485f2dd1dee407a80973c8f129f00d54604d2c90732e8e320e5038a0348
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
 ```

Let's have a look at each part in more detail:

```text
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
c1ec31eb5944: Pull complete
Digest: sha256:d211f485f2dd1dee407a80973c8f129f00d54604d2c90732e8e320e5038a0348
Status: Downloaded newer image for hello-world:latest
```

This part of the output shows that Docker was unable to find the `hello-world` image locally, so it pulled it from the Docker Hub. The `hello-world` image is a very small image that is used to test that your Docker installation is working correctly.

`latest:` is a _**tag**_ for the image. Tags are used to identify different versions of an image. In this case, the `latest` tag is used to identify the latest version of the `hello-world` image.

`c1ec31eb5944: Pull complete` is the _**layer ID**_ of the image that was pulled. Docker images are made up of multiple layers, and each layer is identified by a unique ID. Since the `hello-world` image is very small, it only has one layer.

`Digest: sha256:d211f485...` is a unique hash of the image. This hash is used to uniquely identify the image and its contents.

If you try to run the `docker run hello-world` command again, you should just see the `Hello from Docker!` message without the other output. This is because Docker has already pulled the `hello-world` image and cached it locally.

The actual content of the container can be seen in the message displayed by the container.

It also gives us the following hint:

```text
To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash
```

## Ubuntu in a Container
So, let's try that next:

```bash
docker run -it ubuntu bash
```

You should now see a new prompt that looks something like this:

```text
root@f4b5c7e4b6b4:/#
```

This prompt indicates that you are now inside a Docker container running a Ubuntu image. The `root@f4b5c7e4b6b4` part is the hostname of the container (yours may be different), and the `/#` part is the command prompt.

Here is an overview of the commands we used:

```bash
docker run   # Base command to create and start a new container
-i           # Interactive - keep STDIN open (allows you to type into container)
-t           # Allocate a pseudo-Terminal (gives you the shell prompt)
ubuntu       # The image to use (in this case, official Ubuntu image)
bash         # The command to run inside container (start a bash shell)
```

We can combine tags to make the command shorter: `-it` is the same as `-i -t`. Without `-it`:

- `-i` only: You can send input but display will be weird
- `-t` only: You get nice formatting but can't type input
- neither: Container runs the command and exits unless it has a foreground process

A "bash shell" is the command line interface (CLI). It so happens that if we run:

```bash
docker run -it ubuntu
```
we'll also get a bash shell anyway, because this is the default command for the Ubuntu image. However, you can also do:

```bash
docker run -it ubuntu sh
```

to get a simple shell instead of bash. You can also do

```bash
docker run -it ubuntu zsh
```
to get the interface that macOS uses. It is not available for this image, but you can install it in your own images. 

When we are inside the container, if we run:
    
```bash
cat /etc/os-release
```

You should see the following output:

```text
PRETTY_NAME="Ubuntu 24.04.1 LTS"
NAME="Ubuntu"
VERSION_ID="24.04"
VERSION="24.04.1 LTS (Noble Numbat)"
VERSION_CODENAME=noble
ID=ubuntu
ID_LIKE=debian
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
UBUNTU_CODENAME=noble
LOGO=ubuntu-logo
```

confirming that you are indeed running a Ubuntu container. This container does not have any additional software installed, so you have a clean Ubuntu environment to work with. To exit the container, you can type `exit` and press `Enter`.

## Python in a Container
Let's grab a python container:

```bash
docker run -it python bash
```

We are now inside a docker container with python, and we can run python commands:

```bash
python --version
Python 3.13.0
```

We can also run python and play around with it:

```bash
python
```
    
```python
>>> print("Hello, Docker!")
Hello, Docker!
>>> exit()
```

You can directly access the Python REPL while running the container:

```bash
docker run -it python python
```

If you exit the REPL in the usual way, then you will also exit the container.

## Seeing the Containers and Images
In order to see a list of images that we have pulled, we can run:
   
```bash
docker images
```
and the output should be something like:
```text
REPOSITORY    TAG                  IMAGE ID       CREATED         SIZE
python        latest               c41ea8273365   4 weeks ago     1.02GB
python        3.12-slim-bookworm   668757ec60ef   4 weeks ago     124MB
ubuntu        latest               fec8bfd95b54   5 weeks ago     78.1MB
hello-world   latest               d2c94e258dcb   18 months ago   13.3kB
```

To see a list of all containers, we run:
```bash
docker ps -a
```

You should see something like this:
```text
CONTAINER ID   IMAGE                       COMMAND    CREATED          STATUS                        PORTS     NAMES
5cb8b1bbe52f   ubuntu                      "bash"     13 minutes ago   Exited (127) 13 minutes ago             wizardly_cartwright
80040792ac55   python:3.12-slim-bookworm   "bash"     14 minutes ago   Exited (0) 13 minutes ago               heuristic_kilby
42129b1076cd   python                      "python"   28 minutes ago   Exited (0) 20 minutes ago               peaceful_raman
112c227987a6   python                      "zsh"      28 minutes ago   Created                                 confident_lalande
724386298bc2   python                      "sh"       28 minutes ago   Exited (0) 28 minutes ago               nervous_brahmagupta
4e490eb53aaf   python                      "bash"     34 minutes ago   Exited (0) 28 minutes ago               quirky_bohr
21eea7f7d3b4   ubuntu                      "bash"     35 minutes ago   Exited (0) 34 minutes ago               admiring_payne
19379f07e484   hello-world                 "/hello"   35 minutes ago   Exited (0) 35 minutes ago               adoring_keller
```

note the colourful names...

We can remove containers with:

```bash
docker rm container_id
```
and all unused containers with:

```bash
docker container prune
```

Remove all images with:
   
```bash
docker rmi -f $(docker images -aq)
```

Now if you run `docker ps -a` you should see an empty list.

## Naming containers
You might have noticed that the containers have random names, and that if you want to stop them, you have to use the ID, which is cumbersome. So instead, you can name the container when you run it:

```bash
docker run -it --name mycontainer -it python bash
```

Now I can remove the container with:

```bash
docker rm mycontainer
```

## Preserving information
Let's run the python container again

```bash
docker run -it python bash
```

and try to create a directory:

```bash
cd home
mkdir mydir
```

If you run `ls` you should see the `mydir` directory. Now see what happens when you close down the container and start it again:

```bash
docker run -it python bash
cd home
ls
```

There is nothing there! What is going on? First we need to see exactly why this is happening. Run the `docker ps -a` command, and you should see the following:
```test
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS                      PORTS     NAMES
0b89d0ef62fa   python    "bash"    17 seconds ago   Exited (0) 4 seconds ago              vigorous_gould
90ff3f1f1085   python    "bash"    34 seconds ago   Exited (0) 25 seconds ago             distracted_bohr
```

So we have actually created two containers, and we are not using the same one. This is because when we run the `docker run` command, we are creating a new container each time. This is why the changes we made in the first container are not present in the second container.

So instead I can restart my previous container and attach to it:

```bash
docker start -ai distracted_bohr
```

Now when I change into the `home` directory and run `ls`, I should see the `mydir` directory. The above command is saying "start the container `distracted_bohr` and attach to it interactively".

Generally speaking, we **do not** want to store data in a container. This includes creating files, directories, and databases. If we store files inside the container, they will be lost when the container is stopped or removed:

1. **Persistence Beyond the Lifecycle of the Container**
Containers are ephemeral by design. If you need to update or recreate a container (e.g., pulling a new image), the data stored directly in the container is lost unless explicitly backed up. Mounted volumes persist independently of the container lifecycle, ensuring your data is safe even if the container is removed.

2. **Ease of Data Sharing**
Mounted volumes allow data to be shared between multiple containers. For example, if you have one container for a database and another for a web application, both can share a mounted volume for logs or configurations.

3. **Integration with Host Filesystem**
With a mounted volume, you can directly edit files from your host system (e.g., code tracked in Git), and changes will be reflected in the container in real-time. This makes development workflows more efficient and eliminates the need for repeated docker cp commands.

4. **Simplified Version Control with Git**
If you're using Git, you likely want your working directory (e.g., /app in the container) to correspond to your Git repository on the host. Mounting the directory ensures that any changes made in the container are tracked by Git on the host, simplifying version control and collaboration.

5. **Backup and Portability**
Mounted volumes are easier to back up and migrate. You can copy a directory from your host system for safekeeping or move it to another machine. Data stored inside a container is harder to extract and manage outside of Docker.

6. **Security and Isolation**
Using mounted volumes can help isolate the container's internal state from persistent data. This separation reduces the risk of accidental data loss due to container mismanagement.

This is why containers are often used for running stateless applications that do not need to store data between runs. So how can we store data in a container? We can use _**volumes**_.