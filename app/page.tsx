import { db } from "@/lib/db";

export default async function Home() {
  const tasks = await db.task.findMany();

  const taskById = await db.task.findMany({
    where: {
      id: "65e411492e4dbc131934e6df",
    },
  });

  console.log("check getById task", taskById);

  const countTasks = await db.task.findMany();
  console.log("check tasks count", countTasks.length);
  // const deletedTasks = await db.task.deleteMany();
  // console.log("check all deleted tasks here", deletedTasks);

  // const idsToDelete = [
  //   "65e3f1f42e4dbc131934e67a",
  //   "65e3f1ef2e4dbc131934e679",
  //   "65e3f1ec2e4dbc131934e678",
  //   "65e3f1eb2e4dbc131934e677",
  //   "65e3f1e72e4dbc131934e676",
  //   "65e3f1422e4dbc131934e675",
  //   "65e3f1402e4dbc131934e674",
  //   "65e3f1392e4dbc131934e673",
  //   "65e3f1392e4dbc131934e672",
  // ];

  // const deleteTasks = await prisma?.task.deleteMany({
  //   where: {
  //     id: {
  //       in: [...idsToDelete],
  //     },
  //   },
  // });
  // console.log(deleteTasks);

  // const taskscreate = await db.task.create({
  //   data: {
  //     title: "Make a project plan",
  //   },
  // });
  // const createTasks = await db.task.createMany({
  //   data: [
  //     {
  //       title: "Prepare presentation for the meeting",
  //     },
  //     {
  //       title: "Review and refactor codebase",
  //     },
  //     {
  //       title: "Write documentation for new features",
  //     },
  //     {
  //       title: "Attend team standup meeting",
  //     },
  //     {
  //       title: "Plan sprint goals and tasks",
  //     },
  //     {
  //       title: "Fix bugs reported by QA",
  //     },
  //   ],
  // });

  // console.log(createTasks);

  return (
    <div>
      <div>
        <pre></pre>
      </div>
      {JSON.stringify(taskById, null, 2)}

      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
