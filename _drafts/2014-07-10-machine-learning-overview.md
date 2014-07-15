---
layout: post
title: "Machine learning overview"
description: ""
category: 
tags: []
---
{% include JB/setup %}

There are many introductions to machine learning that postulate all kind of different types of machine learning methods, like evolutionary methods, kernel-based methods, etc. The risk of a classification that is built upon the techniques used, rather than trying to get into detail into the underlying optimization procedure, is that it looks like you can pick anything you want to solve a specific problem. This is not the case. There are well-established relations between different machine learning methods, and knowing them is key to solving a problem efficiently.

# Supervised, unsupervised, and semi-supervised learning

There are only two types of learning, and one intermediate type. First, data can come with labels, for example, data can be images of faces, and labels the corresponding gender. This is a supervised setting. Second, data can also come without labels, images of faces, without the gender given to the system. This is an unsupervised setting. Third, data can have labels for a few of those images, but not for others. This is a semi-supervised setting. In theory, you might say there is another setting, namely only labels, and no data. This is however not considered a machine learning problem, but a philosophical one...

A supervised learning problem is also often called a classification problem. The labels here are called the classes. Another term that is often used is regression. Regression is a general term for establishing relationships between variables. A variable can be a given outcome variable, in which it is a supervised learning problem, but this doesn't need to be (orthogonal regression for example). The goal of the learning procedure can be moderately diverse.

* The machine is provided with a new data item, and it needs to predict the corresponding label.
* The machine is provided with an uncomplete data item, and it needs to complete the data item and/or predict the corresponding label.
* The machine is provided with a label, and it needs to generate a corresponding data item.

Note, that there might be many other learning problems, but they will all require additional structure to be defined. For example, a binary classification problem only has labels that are of binary nature (say Dutch or American). Or a ranking structure within the items as in a (https://en.wikipedia.org/wiki/Ranking_SVM)[ranking SVM]. We will see examples of these additional structures and how, if they are properly defined, they often wind down to be the same problem, under wildly different names in different fields.

## Clustering

Let us introduce the old working horse of machine learning, k-means clustering:

$$\underset{S}{\arg\min} \sum_{i=1}^k \sum_{x_j \in S_i} \| x_j - \mu_i \|^2$$

The set $$S=\{S_1,\ldots,S_k\}$$ partitions the data $$\{x_1,\ldots,x_N\}$$ into $$k$$ clusters. The partition is chosen such that the within-cluster squared distances between points and the center of a set are minimized. This corresponds to separating the data points through hyperplanes. A more flexible approach is too make use of a kernel, a fancy word for a function on the data points:

$$\underset{S}{\arg\min} \sum_{i=1}^k \sum_{x_j \in S_i} \| k(x_j) - \mu_i \|^2$$

Now $$\mu_i$$ is the mean in kernel space.

## References

- multiple kernel learning = group lasso
On the Equivalence of Regularization and Certain Reproducing Kernel Hilbert Space Approaches for Solving First Kind Problems
Ising Quantum Chain is Equivalent to a Model of Biological Evolution
On the application of statistical physics to evolutionary biology

Read More: http://epubs.siam.org/doi/abs/10.1137/0713018
