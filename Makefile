project-setup:
	cd "$(shell pwd)/api" && make backend-build
	cd ..
	cd "$(shell pwd)/app" && make frontend-build

project-start:
	cd "$(shell pwd)/db" && make database-up
	cd ..
	cd "$(shell pwd)/api" && make backend-up
	cd ..
	cd "$(shell pwd)/app" && make frontend-up

project-reset:
	cd "$(shell pwd)/db" && make database-reset
	cd ..
	cd "$(shell pwd)/api" && make backend-reset
	cd ..
	cd "$(shell pwd)/app" && make frontend-reset

project-down:
	cd "$(shell pwd)/db" && make database-down
	cd ..
	cd "$(shell pwd)/api" && make backend-down
	cd ..
	cd "$(shell pwd)/app" && make frontend-down