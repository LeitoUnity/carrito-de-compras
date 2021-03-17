frontend-build:
	npm run build
	docker build -t lider-frontend .

frontend-up:
	docker run -d -p 3000:3000 --name lider-frontend --network lider --ip 172.16.1.14 -v "$(shell pwd)/.":/usr/src/app/ frontend

frontend-reset:
	make frontend-down
	make frontend-up

frontend-down:
	docker rm -f lider-frontend
