FROM node:8.0.0-slim

RUN echo $HOME
# Set up environment
ENV TERM=xterm-256color
ENV PROJECT_NAME AM-PRUEBA-API
ENV PROJECT_ROOT $HOME/AM-PRUEBA-API

# Install dependencies
RUN mkdir -p /tmp/$PROJECT_NAME
ADD package.json /tmp/$PROJECT_NAME/package.json
RUN cd /tmp/$PROJECT_NAME/ && npm install --production
RUN mkdir -p $PROJECT_ROOT
RUN cp -a /tmp/$PROJECT_NAME/node_modules $PROJECT_ROOT

# Copy code
WORKDIR $PROJECT_ROOT
COPY . $PROJECT_ROOT
RUN cd $PROJECT_ROOT/ && npm install
# Start User Service
ENTRYPOINT ["npm", "start"]
