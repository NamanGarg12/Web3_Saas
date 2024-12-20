-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "User_Id" INTEGER NOT NULL,
    "signature" TEXT NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "option_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Worker" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "pending_amount" INTEGER NOT NULL,
    "locked_amount" INTEGER NOT NULL,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "worker_id" INTEGER NOT NULL,
    "option_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Task_Title_key" ON "Task"("Title");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_address_key" ON "Worker"("address");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_User_Id_fkey" FOREIGN KEY ("User_Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_worker_id_fkey" FOREIGN KEY ("worker_id") REFERENCES "Worker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "Options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
