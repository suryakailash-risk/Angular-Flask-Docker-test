FROM python:3.10.9

# MAINTAINER Sanjiv Kumar "mr.san.kumar@gmail.com"

ENV PYTHONUNBUFFERED 1

RUN mkdir -p /usr/src/app

# Update working directory
WORKDIR /usr/src/app

# copy everything from this directory to server/flask docker container
COPY . /usr/src/app/

# Give execute permission to below file, so that the script can be executed by docker.
RUN chmod 777 /usr/src/app/entrypoint.sh

# Install the Python libraries
RUN pip install --no-cache-dir -r requirements.txt

# COPY uswgi.ini
COPY ./uwsgi.ini /etc/uwsgi.ini

EXPOSE 8000

# run server
CMD ["./entrypoint.sh"]