<template>

  <div class="List">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h3 class="text-center">Subscriptions</h3>
              <table class="table align-middle">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subscription in Subscriptions" :key="subscription.id">
                        <td>{{ subscription.name }}</td>
                        <td>{{ subscription.description }}</td>
                        <td>{{ subscription.amount }}</td>
                        <td>
                          <router-link outlined :to="{name: 'edit', params: { id: subscription.key }}" class="btn btn-info">Edit</router-link>
                          <button @click.prevent="deleteSubscription(subscription.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import db from '../firebaseDb'

export default {
  name: "Home",
  data() {
    return {
      Subscriptions: []
    }
  },
  created () {
    db.collection('subscriptions').onSnapshot((snapshotChange) => {
      this.Subscriptions = []
      snapshotChange.forEach((doc) => {
        this.Subscriptions.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          amount: doc.data().amount,
          frequency: doc.data().frequency
        })
      })
    })
  },
  methods: {
    deleteSubscription (id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('subscriptions').doc(id).delete().then(() => {
          console.log('Document deleted!')
        })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table td,.table th {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align:center;
}

.btn {
  margin-left: 2px;
  margin-right: 2px;
}


</style>
