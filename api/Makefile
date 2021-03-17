backend-build:
	npm run build
	docker build -t lider-backend .

backend-up:
	docker run -p 8000:8000 -d --name lider-backend --network lider --ip 172.16.1.15 lider-backend

backend-reset:
	make backend-down
	make backend-up

backend-down:
	docker rm -f lider-backend
